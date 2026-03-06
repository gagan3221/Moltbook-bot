import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const MOLT_API = "https://www.moltbook.com/api/v1";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

const headers = {
  Authorization: `Bearer ${process.env.MOLT_API_KEY}`,
};

async function fetchPosts() {
  try {
    const res = await axios.get(`${MOLT_API}/feed?sort=hot&limit=10`, {
      headers,
    });
    return res.data.posts;
  } catch (err) {
    console.error("Error fetching posts:", err.response?.data || err.message);
    throw err;
  }
}

async function generateReply(content) {
  try {
    const prompt = `You are an AI agent on Moltbook. Be curious, intelligent and conversational with other AI agents.

Post content: ${content}

Generate a thoughtful and engaging reply:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (err) {
    console.error("Error generating reply:", err.message);
    throw err;
  }
}

async function comment(postId, message) {
  try {
    await axios.post(
      `${MOLT_API}/posts/${postId}/comments`,
      {
        content: message,
      },
      { headers },
    );
  } catch (err) {
    console.error(
      "Error commenting on post:",
      err.response?.data || err.message,
    );
    throw err;
  }
}

async function runAgent() {
  try {
    const posts = await fetchPosts();

    for (const post of posts.slice(0, 3)) {
      const reply = await generateReply(post.content);

      await comment(post.id, reply);

      console.log("Commented on post:", post.id);
    }
  } catch (err) {
    console.error("Agent error:", err.message);
  }
}
runAgent();
setInterval(runAgent, 1 * 60 * 1000); // 1 minute

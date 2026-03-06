# Moltbook Bot 🦞

An intelligent AI agent that participates in the Moltbook social network for AI agents. The bot automatically fetches hot posts, generates thoughtful replies using Google Gemini, and engages with the community.

## Features

- 🔥 Fetches hot posts from Moltbook feed
- 🤖 Generates intelligent, contextual replies using Google Gemini AI
- 💬 Automatically comments on interesting posts
- ⏰ Runs continuously with periodic checks (every 1 minute)
- 🛡️ Robust error handling and logging

## Prerequisites

- Node.js (v18 or higher)
- A Moltbook account and API key
- Google Gemini API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/gagan3221/Moltbook-bot.git
cd Moltbook-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MOLT_API_KEY=your_moltbook_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

## Getting Your API Keys

### Moltbook API Key

1. Register your agent at [Moltbook](https://www.moltbook.com):
```bash
curl -X POST https://www.moltbook.com/api/v1/agents/register \
  -H "Content-Type: application/json" \
  -d '{"name": "YourAgentName", "description": "Your bot description"}'
```

2. You'll receive an API key and a claim URL
3. Visit the claim URL to link your agent to your account
4. Copy the API key to your `.env` file

### Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env` file

## Usage

Start the bot:
```bash
node index.js
```

The bot will:
1. Fetch the top 10 hot posts from Moltbook
2. Generate thoughtful replies using Gemini for the first 3 posts
3. Comment on those posts
4. Repeat this process every 1 minute

## Configuration

You can customize the bot's behavior by modifying `index.js`:

- **Post limit**: Change the `limit` parameter in `fetchPosts()` (line 18)
- **Posts to comment on**: Change `posts.slice(0, 3)` to comment on more/fewer posts (line 66)
- **Run interval**: Modify the interval in milliseconds (line 78)
  - Current: `1 * 60 * 1000` (1 minute)
  - For 5 minutes: `5 * 60 * 1000`
- **AI model**: Change the model in line 9 to use different Gemini versions
- **Feed sorting**: Change `sort=hot` to `sort=new` or `sort=top` in `fetchPosts()` (line 18)

## Project Structure

```
moltbook-bot/
├── index.js           # Main bot logic
├── package.json       # Dependencies and metadata
├── .env              # Environment variables (not tracked)
├── .gitignore        # Git ignore rules
├── credentials.json  # Moltbook credentials (not tracked)
├── HEARTBEAT.md      # Moltbook heartbeat documentation
├── MESSAGING.md      # Moltbook messaging documentation
├── RULES.md          # Moltbook rules and guidelines
├── SKILL.md          # Moltbook API documentation
└── README.md         # This file
```

## How It Works

1. **Fetch Posts**: The bot calls the Moltbook API to get hot posts from the feed
2. **Generate Replies**: For each post, Gemini analyzes the content and generates a contextual, engaging reply
3. **Post Comments**: The bot submits the generated replies as comments
4. **Loop**: The process repeats every minute to stay active in the community

## Error Handling

The bot includes comprehensive error handling:
- Network errors when fetching posts
- AI generation failures
- Comment posting errors
- All errors are logged to the console with details

## Best Practices

- 🎯 Be respectful and contribute value to discussions
- 💡 Don't spam - adjust the interval and number of comments appropriately
- 🔄 Monitor the bot's activity and quality of responses
- 🛡️ Keep your API keys secure and never commit them to version control

## Moltbook Resources

- **Homepage**: https://www.moltbook.com
- **API Documentation**: See `SKILL.md` for complete API reference
- **Heartbeat Guide**: See `HEARTBEAT.md` for periodic check-in patterns
- **Messaging**: See `MESSAGING.md` for DM functionality
- **Rules**: See `RULES.md` for community guidelines

## Dependencies

- `axios` - HTTP client for API requests
- `@google/generative-ai` - Google Gemini AI integration
- `dotenv` - Environment variable management

## Contributing

Feel free to open issues or submit pull requests to improve the bot!

## License

MIT

## Author

Created with ❤️ for the Moltbook AI agent community

---

**Note**: This bot is designed to participate meaningfully in the Moltbook community. Please use it responsibly and follow Moltbook's community guidelines.

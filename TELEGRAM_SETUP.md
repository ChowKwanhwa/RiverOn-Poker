# Telegram Notification Setup Guide

To receive reservation notifications on Telegram, you need two things: a **Bot Token** and your **Chat ID**.

## Step 1: Create a Bot (Get Bot Token)
1.  Open Telegram and search for **@BotFather**.
2.  Send the message `/newbot`.
3.  Follow the instructions:
    *   Give it a name (e.g., "RiverOn Reservation Bot").
    *   Give it a username (must end in `bot`, e.g., `riveron_poker_bot`).
4.  BotFather will give you a **Token** (looks like `123456789:ABCdefGHIjklMNOpqrstUVwxyz`).
5.  **Copy this Token.**

## Step 2: Get Your User ID (Get Chat ID)
1.  Search for **@userinfobot** in Telegram.
2.  Click **Start** (or send `/start`).
3.  It will reply with your details. Look for **Id**.
4.  **Copy this ID** (it's a number, e.g., `123456789`).

## Step 3: Configure Your Website
1.  Open (or create) the `.env.local` file in your `riveron-poker` folder.
2.  Add (or replace) the following lines:

```env
TELEGRAM_BOT_TOKEN=your_token_from_step_1
TELEGRAM_CHAT_ID=your_id_from_step_2
```

## Step 4: Test It
1.  **Important:** You must send a message (any message) to your new bot first, so you allow it to talk to you.
2.  Go to your website reservation form and submit a test booking.
3.  You should receive a message on Telegram immediately!

# Email Setup Guide for RiverOn Poker

To make the reservation form send actual emails, you need to create a file named `.env.local` in this folder.

1.  Create a new file named `.env.local`
2.  Paste the following content into it:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=your-email@gmail.com
```

## How to get the App Password (for Gmail) / 如何获取应用专用密码:

**English:**
1.  Go to your Google Account Settings.
2.  Enable **2-Step Verification**.
3.  Search for **App passwords**.
4.  Create a new one for "Mail".
5.  Use that 16-digit password in the `SMTP_PASS` field.

**中文指南 (Chinese):**
1.  点击左侧菜单的 **“安全性与登录”** (Security)。
2.  确保 **“两步验证”** (2-Step Verification) 已经开启。
3.  在顶部的搜索栏 (搜索 Google 账号) 中输入 **“应用专用密码”** (App passwords)。
4.  创建一个新的密码，名称可以填 "RiverOn"。
5.  复制生成的 16 位密码，填入 `.env.local` 文件的 `SMTP_PASS` 字段。
    *   `SMTP_HOST` 固定为 `smtp.gmail.com`
    *   `SMTP_PORT` 固定为 `587`
    *   `SMTP_USER` 填你的 Gmail 邮箱


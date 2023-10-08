const { Telegraf } = require('telegraf');
const axios = require('axios');
const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs').promises;

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new Telegraf('6609351362:AAFF5GOf0TlQwp8Dl_LMtPMGnnI9BadIzvc');


// Register a command handler for the /start command
bot.command('start', (ctx) => {
    ctx.reply('1ta rasm, kodash rasma tagashba. Adelni ne!');

    const photoUrl = './IMG_7331.jpg';
    ctx.replyWithPhoto({ source: photoUrl })
        .catch((error) => console.error('Error sending photo:', error));
});

// Handle text messages
bot.on('text', (ctx) => {
    ctx.reply('1ta rasm, kodash rasma tagashba. Adelni ne!');
    const photoUrl = './IMG_7331.jpg';
    ctx.replyWithPhoto({ source: photoUrl })
        .catch((error) => console.error('Error sending photo:', error));
});

// Handle photo messages
bot.on('photo', async(ctx) => {
    try {
        // Get the largest available photo (usually the last in the array)
        const photo = ctx.message.photo[ctx.message.photo.length - 1];
        const fileId = photo.file_id;

        // Get the file link
        const fileLink = await ctx.telegram.getFileLink(fileId);

        // Download the image using Axios
        const response = await axios.get(fileLink, { responseType: 'arraybuffer' });

        // Handle the response data
        const imageBuffer = Buffer.from(response.data);

        // Load the image and create a canvas
        const image = await loadImage(imageBuffer);
        const canvas = createCanvas(image.width, image.height);
        const ctxCanvas = canvas.getContext('2d');
        ctxCanvas.drawImage(image, 0, 0);

        // Get the text (number) from the message
        const text = ctx.message.caption || '##########';

        // Customize the text appearance (font, size, color)
        registerFont('arial.ttf', { family: 'YourFontFamily' }); // Change 'path-to-your-font.ttf' and 'YourFontFamily'
        ctxCanvas.font = '60px YourFontFamily'; // Change the font size and family
        ctxCanvas.fillStyle = 'white'; // Change the text color

        // Add the text to the canvas
        ctxCanvas.fillText(text, 200, 300); // Adjust the position as needed

        // Save the edited image as JPEG
        const editedImageBuffer = canvas.toBuffer('image/jpeg');

        // Send the edited image back to the user
        await ctx.replyWithPhoto({ source: editedImageBuffer });
    } catch (error) {
        console.error('Error processing image:', error);
        ctx.reply('An error occurred while processing the image. Error: ' + error.message);
    }
});

// Start the bot
bot.launch();

console.log('Bot is running...');
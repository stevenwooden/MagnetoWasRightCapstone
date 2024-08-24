require('dotenv').config();
const axios = require('axios');
const Character = require('../models/character');

const fetchComicVineData = async () => {
    const apiKey = process.env.COMIC_VINE_API_KEY;
    const apiUrl = `https://comicvine.gamespot.com/api/characters/?api_key=${apiKey}&format=json&limit=10`;

    try {
        const response = await axios.get(apiUrl);
        const characters = response.data.results;

    for (const char of characters) {
        await Character.create({
            id: char.id,
            alias: char.name,
            powers: char.powers || [],
            image: char.image.icon_url,
        });
    }

    console.log('Data fetched and stored successfully.');
    } catch (error) {
    console.error('Error fetching data from Comic Vine API:', error);
    }
};

module.exports = fetchComicVineData;
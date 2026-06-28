import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';

const DUMMY_NEWS = [
  {
    id: 'm1',
    slug: 'benefits-of-learning-music',
    title: 'The Benefits of Learning Music',
    image: 'blog-1.jpg',
    date: '2027-01-15',
    content:
      'Learning music improves creativity, memory, and concentration. Whether you play the guitar, piano, or violin, practicing regularly strengthens your brain while providing a fun and rewarding hobby. Music also helps reduce stress and builds confidence over time.',
  },
  {
    id: 'm2',
    slug: 'how-to-start-playing-guitar',
    title: 'How to Start Playing Guitar',
    image: 'blog-2.jpg',
    date: '2027-02-10',
    content:
      'Starting guitar is easier than ever with countless online resources. Begin by learning basic chords, practice simple songs, and focus on building finger strength. Consistency is more important than long practice sessions, so aim for 20–30 minutes every day.',
  },
  {
    id: 'm3',
    slug: 'top-music-genres-explained',
    title: 'Top Music Genres Explained',
    image: 'blog-3.jpg',
    date: '2027-03-05',
    content:
      'From rock and jazz to hip-hop and classical, every music genre has its own history and unique style. Exploring different genres broadens your musical taste and helps you appreciate the diversity of artists and cultures around the world.',
  },
  {
    id: 'm4',
    slug: 'importance-of-daily-music-practice',
    title: 'Why Daily Music Practice Matters',
    image: 'blog-4.jpg',
    date: '2026-04-18',
    content:
      'Daily practice is the key to becoming a better musician. Short, focused sessions improve technique, timing, and confidence more effectively than occasional long sessions. Setting realistic goals keeps motivation high and progress steady.',
  },
  {
    id: 'm5',
    slug: 'how-music-affects-your-mood',
    title: 'How Music Affects Your Mood',
    image: 'blog-5.jpg',
    date: '2026-05-22',
    content:
      'Music has the power to influence emotions and mental well-being. Upbeat songs can boost energy, while slower melodies help reduce stress and promote relaxation. Choosing the right playlist can improve focus, productivity, and overall happiness.',
  },
  {
    id: 'm6',
    slug: 'the-saxophone-a-timeless-instrument-of-soulful-sound',
    title: 'The Saxophone: A Timeless Instrument of Soulful Sound',
    image: 'blog-6.jpg',
    date: '2025-06-30',
    content:
      'The saxophone is a versatile musical instrument known for its rich, expressive tone. Invented by Adolphe Sax in 1846, it is widely used in jazz, classical, and pop music. Its smooth and powerful sound makes it a favorite among musicians worldwide.',
  },
];

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

initDb();

app.listen(8080);

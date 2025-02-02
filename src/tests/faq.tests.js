import * as chai from 'chai';
import request from 'supertest';
import app from '../server.js'; // Adjust the import path based on where your server is located
import mongoose from 'mongoose';
import FAQ from '../models/faq.model.js'; // Adjust the import path based on your model location

const { expect } = chai;

describe('FAQ API', function () {
  // Connect to MongoDB before tests
  before(async function () {
    // Replace this with your MongoDB connection string
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test-faq';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  });

  // Clean up the database after tests
  after(async function () {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  });

  it('should create a new FAQ', async function () {
    const newFAQ = {
      question: 'What is Node.js?',
      answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.',
    };

    const res = await request(app)
      .post('/api/faqs')  // Adjust the endpoint based on your routes
      .send(newFAQ);

    // Test the response
    expect(res.status).to.equal(201);
    expect(res.body.success).to.equal(true);  // Ensure the success flag is true
    expect(res.body.data).to.have.property('question').eql(newFAQ.question);  // Check question
    expect(res.body.data).to.have.property('answer').eql(newFAQ.answer); 
  });

  it('should get all FAQs', async function () {
    const res = await request(app).get('/api/faqs');

    // Test the response
    expect(res.status).to.equal(200);
    expect(res.body.data).to.be.an('array');
    expect(res.body.data[0]).to.have.property('question');
    expect(res.body.data[0]).to.have.property('answer');
    expect(res.body.data.length).to.be.greaterThan(0);
  });
});

import request from 'supertest';
import { app } from '../app'; // Adjust the import path as needed
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo: any;

beforeAll(async () => {

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    process.env.DB_URI = mongoUri; // Set the DB_URI environment variable for the test environment

    await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    // beforeEach test starts reach out to mongo 
    // Deletes all the connections before running the tests
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

// Stop the server after running all the test suites
afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }
    await mongoose.connection.close();
});


describe("POST /signup", () => {
    it("should return 200 OK for successful signup", async () => {
        const response = await request(app)
            .post('/signup')
            .send({ email: "test100@example.com" });
        expect(response.statusCode).toBe(200);
    });

    it("should return 400 Bad Request for invalid email", async () => {
        const response = await request(app)
            .post('/signup')
            .send({ email: "notanemail" });
        expect(response.statusCode).toBe(400);
    });

    it("should return 409 Email exists", async () => {
        const response = await request(app)
            .post('/signup')
            .send({ email: "test100@example.com" });

        const response2 = await request(app)
            .post('/signup')
            .send({ email: "test100@example.com" });

        expect(response2.statusCode).toBe(409);
    });
});


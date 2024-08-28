const numberArray: number[] = new Array(9).fill(9);
console.log(numberArray);

const stringArray: string[] = ['hello', 'world'];
console.log(stringArray);

const charArray: boolean[] = Array.from({ length: 5 }, () => false);
console.log(charArray);

/*
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const main = async () => {
    const posts = await fetchPosts();
    console.log('Fetched posts:', posts);
};

main();


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const main = async () => {
    const posts = await fetchPosts();
    console.log('Fetched posts:', posts);
};

main();
*/

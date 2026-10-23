
console.log("===== FETCH API AND HTTP REQUESTS =====");

// 1. GET - Fetch one post
async function getSinglePost() {
    console.log("\n1. GET SINGLE POST");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const post = await response.json();

        console.log("Post ID:", post.id);
        console.log("Title:", post.title);
        console.log("Body:", post.body);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 2. GET - Fetch all posts
async function getAllPosts() {
    console.log("\n2. GET ALL POSTS");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const posts = await response.json();

        console.log("Total posts:", posts.length);
        console.log("First post:", posts[0]);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 3. GET - Fetch a specific user
async function getUser() {
    console.log("\n3. GET USER");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 4. GET - Filter posts by user
async function getUserPosts() {
    console.log("\n4. FILTER POSTS");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const posts = await response.json();

        console.log("Posts by user 1:", posts.length);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 5. POST - Create a sample post
async function createPost() {
    console.log("\n5. CREATE POST");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Learning JavaScript",
                    body: "I am practicing Fetch API.",
                    userId: 1
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const newPost = await response.json();

        console.log("Created post:", newPost);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 6. PATCH - Update part of a post
async function updatePost() {
    console.log("\n6. UPDATE POST");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Updated JavaScript Title"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const updatedPost = await response.json();

        console.log("Updated post:", updatedPost);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// 7. DELETE - Delete a sample post
async function deletePost() {
    console.log("\n7. DELETE POST");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        console.log("Delete status:", response.status);
        console.log("Delete request successful!");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Run all examples one by one
async function main() {
    await getSinglePost();
    await getAllPosts();
    await getUser();
    await getUserPosts();
    await createPost();
    await updatePost();
    await deletePost();

    console.log("\nAll Fetch API examples completed!");
}

main();

enum Account {
    standard = "standard",
    premium = "premium",
    author = "author",
    admin = "admin"
}

interface Share {
    userFrom: string;
    articleShared: string;
}

interface User {
    _id: string;
    username: string;
    name: string;
    email: string;
    account: Account; 
    friendList: string[],
    shareList: Share[],
    friendRequests: string[],
    savedPosts: string[],
    createdAt?: string; // Optional field if you store timestamps
    updatedAt?: string; // Optional field if you store timestamps
} 

export default User
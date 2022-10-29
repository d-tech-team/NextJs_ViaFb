const category = {
    "id": "000000000000000000000000",
    "title": "string",
    "description": "string",
    "image": "string",
    "is_unlisted": true,
    "is_deleted": true,
    "created_at": "2022-10-27T15:37:42.251Z",
    "updated_at": "2022-10-27T15:37:42.251Z"
}

export default function handler(req, res) {
    res.status(200).json(category)
}
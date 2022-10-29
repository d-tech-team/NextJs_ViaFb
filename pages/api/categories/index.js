const categories = // 20221027214433
    [
        {
            "id": "6359d58c2b3ec9766e822806",
            "title": "category 1",
            "description": "",
            "image": "",
            "is_unlisted": false,
            "is_deleted": false,
            "created_at": "2022-10-27T00:49:16.571Z",
            "updated_at": "2022-10-27T00:49:16.571Z"
        },
        {
            "id": "6359d58e2b3ec9766e822808",
            "title": "category 2",
            "description": "",
            "image": "",
            "is_unlisted": false,
            "is_deleted": false,
            "created_at": "2022-10-27T00:49:18.696Z",
            "updated_at": "2022-10-27T00:49:18.696Z"
        },
        {
            "id": "6359d5902b3ec9766e82280a",
            "title": "category 3",
            "description": "",
            "image": "",
            "is_unlisted": false,
            "is_deleted": false,
            "created_at": "2022-10-27T00:49:20.758Z",
            "updated_at": "2022-10-27T00:49:20.758Z"
        },
        {
            "id": "6359d5922b3ec9766e82280c",
            "title": "category 4",
            "description": "",
            "image": "",
            "is_unlisted": false,
            "is_deleted": false,
            "created_at": "2022-10-27T00:49:22.288Z",
            "updated_at": "2022-10-27T00:49:22.288Z"
        },
        {
            "id": "6359d5a72b3ec9766e82280e",
            "title": "category 5",
            "description": "",
            "image": "",
            "is_unlisted": false,
            "is_deleted": false,
            "created_at": "2022-10-27T00:49:43.928Z",
            "updated_at": "2022-10-27T00:49:43.928Z"
        }
    ]

export default function handler(req, res) {
    res.status(200).json(categories)
}
const products = [
    {
        "id": "000000000000000000000000",
        "title": "string",
        "description": "string",
        "images": [
            "https:example.com/example.jpg"
        ],
        "price": 0,
        "min_amount": 0,
        "max_amount": 0,
        "discount": 0,
        "is_hot_sell": true,
        "is_unlisted": true,
        "is_deleted": true,
        "type": 0,
        "category": "000000000000000000000000",
        "created_at": "2022-10-27T15:26:24.267Z",
        "updated_at": "2022-10-27T15:26:24.267Z"
    },
    {
        "id": "000000000000000000000000",
        "title": "string",
        "description": "string",
        "images": [
            "https:example.com/example.jpg"
        ],
        "price": 0,
        "min_amount": 0,
        "max_amount": 0,
        "discount": 0,
        "is_hot_sell": true,
        "is_unlisted": true,
        "is_deleted": true,
        "type": 0,
        "category": "000000000000000000000000",
        "created_at": "2022-10-27T15:26:24.267Z",
        "updated_at": "2022-10-27T15:26:24.267Z"
    },
    {
        "id": "000000000000000000000000",
        "title": "string",
        "description": "string",
        "images": [
            "https:example.com/example.jpg"
        ],
        "price": 0,
        "min_amount": 0,
        "max_amount": 0,
        "discount": 0,
        "is_hot_sell": true,
        "is_unlisted": true,
        "is_deleted": true,
        "type": 0,
        "category": "000000000000000000000000",
        "created_at": "2022-10-27T15:26:24.267Z",
        "updated_at": "2022-10-27T15:26:24.267Z"
    }
]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(products)
}

const categories = [
    {
        image: "image",
        updated_at: "2000-01-23T04:56:07.000+00:00",
        description: "description",
        created_at: "2000-01-23T04:56:07.000+00:00",
        id: "0000000000000000000000003",
        title: "Category 1",
        products: [
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 1,
                "description": "description",
                "max_amount": 1,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title 1",
                "type": 5
            },
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 6,
                "description": "description",
                "max_amount": 2,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title2",
                "type": 5
            },
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 6,
                "description": "description",
                "max_amount": 3,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title3",
                "type": 5
            },
        ]
    },
    {
        image: "image",
        updated_at: "2000-01-23T04:56:07.000+00:00",
        description: "description",
        created_at: "2000-01-23T04:56:07.000+00:00",
        id: "0000000000000000000000003",
        title: "Category 2",
        products: [
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 1,
                "description": "description",
                "max_amount": 1,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title 1",
                "type": 5
            },
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 6,
                "description": "description",
                "max_amount": 2,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title2",
                "type": 5
            },
            {
                "images": [
                    "https:example.com/example.jpg",
                    "https:example.com/example.jpg"
                ],
                "updated_at": "2000-01-23T04:56:07.000+00:00",
                "price": 10000,
                "min_amount": 6,
                "description": "description",
                "max_amount": 3,
                "created_at": "2000-01-23T04:56:07.000+00:00",
                "id": "000000000000000000000000",
                "title": "title3",
                "type": 5
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(categories)
}
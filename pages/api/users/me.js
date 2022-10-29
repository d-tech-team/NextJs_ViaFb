const user = {
    "username": "string",
    "email": "user@example.com",
    "role": [
        0
    ],
    "money": 0,
    "money_spent": 0,
    "referral_money": 0,
    "referral_by": "000000000000000000000000",
    "created_at": "2022-10-27T15:23:50.084Z",
    "updated_at": "2022-10-27T15:23:50.084Z"
}


export default function handler(req, res) {
    res.status(200).json(user)
}
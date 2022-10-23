const user = {
    "money_spent": 6,
    "role": [
        0,
        0
    ],
    "money": 0,
    "updated_at": "2000-01-23T04:56:07.000+00:00",
    "referral_money": 1,
    "created_at": "2000-01-23T04:56:07.000+00:00",
    "referral_by": "000000000000000000000000",
    "email": "",
    "username": "username"
}


export default function handler(req, res) {
    res.status(200).json(user)
}
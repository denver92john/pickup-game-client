export default {
    users: [
        {
            user_id: "1",
            username: "JDenver",
            password: "jdenver",
            first_name: "John",
            last_name: "Denver"
        },
        {
            user_id: "2",
            username: "Beast Mode",
            password: "seahawks",
            first_name: "Marshawn",
            last_name: "Lynch"
        },
        {
            user_id: "3",
            username: "brady12",
            password: "patriots",
            first_name: "Tom",
            last_name: "Brady"
        }
    ],
    games: [
        {
            game_id: "1",
            title: "Turkey Bowl",
            description: "Thanksgiving football game",
            type: "football",
            time: "",
            date: "2018-04-26T23:00:00.000Z",
            location: "",
            max_players: "10",
            host: "1",
            players: [
                {player_id: "1"},
                {player_id: "2"},
                {player_id: "3"}
            ]
        },
        {
            game_id: "2",
            title: "Championship",
            description: "Hockey game for who can make it",
            type: "hockey",
            time: "",
            date: "",
            location: "",
            max_players: "6",
            host: "2",
            players: [
                {player_id: "1"},
                {player_id: "2"},
            ]
        },
        {
            game_id: "3",
            title: "Dunk Fest",
            description: "The premier pickup basketball game of the summer",
            type: "basketball",
            time: "",
            date: "",
            location: "",
            max_players: "8",
            host: "3",
            players: [
                {player_id: "1"},
                {player_id: "2"},
                {player_id: "3"}
            ]
        }
    ]
}
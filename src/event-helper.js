export const checkPlayer = (players = [], player_id) => {
    let found;
    if(players.find(player => players.id == player_id)) {
        found = !!found
    } else {
        found = !found
    }
    return found
}
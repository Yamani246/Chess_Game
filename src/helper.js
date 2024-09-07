export const createPosition = () => {
    const position = new Array(8).fill('').map(x => new Array(8).fill(''))
    position[0] = ['r_w', 'n_w', 'b_w', 'q_w', 'k_w', 'b_w', 'n_w', 'r_w'];
    position[1] = Array(8).fill('p_w');

    position[7] = ['r_b', 'n_b', 'b_b', 'q_b', 'k_b', 'b_b', 'n_b', 'r_b'];
    position[6] = Array(8).fill('p_b');

    return position
}
export const copyPosition = (position) => {
    const newPosition = new Array(8).fill("").map((x) => new Array(8).fill(""));
  
    for (let rank = 0; rank < 8; rank++) {
      for (let file = 0; file < 8; file++) {
        newPosition[rank][file] = position[rank][file];
      }
    }
  
    return newPosition;
  };
  
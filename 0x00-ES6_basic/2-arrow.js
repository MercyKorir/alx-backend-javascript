const getNeighborhoodsList = () => {
  let sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
  };
  addNeighborhood('Kapseret');
  return sanFranciscoNeighborhoods;
};
console.log(getNeighborhoodsList());

// export default getNeighborhoodsList;

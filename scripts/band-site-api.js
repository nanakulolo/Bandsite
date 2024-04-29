//creating the class for the api
class CommentsAPI {
  constructor() {
    this.apiKey = "f86f619d-efa4-4342-b039-a931d732251a";
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
    this.headers = {'Content-Type': 'application/json',}
    
  }
  
  //function to get the comments data from the api
  async getComments() {
    const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
    const comments = response.data;
    //sort by timestamp in descending order
    comments.sort(function(a, b){
      return b.timestamp - a.timestamp;
    });
    return comments;
  }
  //function to post comments to the api 
  async postComment(comment) {
    const response = await axios.post(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`,
      comment
    );
    return response.data;
  }
  //function to get the show data from the api
  async getShows() {
    const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
    const shows = response.data;
    return shows;
  }
}

// Export the CommentsAPI to make it available to other scripts
export default CommentsAPI;
/*

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

Twitter() Initializes your twitter object.
void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
 

Example 1:

Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
 
 */


class Twitter {

	// need a data structure to represent the user ID and tweets
	// map would be useful
	constructor() {
	  this.tweets = new Map()
	  this.following = new Map()
	  this.time = 0 // when the tweet is posted
	}
  
  // each user has their own list of tweets stored in chronological order
  // O(1) time O(N) space
	postTweet(userId, tweetId) {
	  if (!this.tweets[userId]) {
		this.tweets.set(userId, [])
	  }
  
	  this.tweets.get(userId).push([tweetId, this.time++]);
	}
  
	// retrieves all the tweets from users and who they follow
	// sort and return the top 10 based on recency
	// O(N) O(N)
	getNewsFeed(userId) {
	  let tweetList = []
  
	// pull all the tweets by the user
	  if (this.tweets.has(userId)) {
		tweetList.push(...this.tweets.get(userId))
	  }
  
	  // add tweets from people they follow
	  if (this.following.get(userId)) {
		for (let followeeId of this.following.get(userId)) {
		  if (this.tweets.has(followeeId)) {
			tweetList.push(...this.tweets.get(followeeId));
		  }
		}
	  }
  
	  tweetList.sort((a, b) => b[1] - a[1])
	  return tweetList.slice(0, 10).map(tweet => tweet[0])
	}
  
  
	// a user has a list of users they follow or then unfollow
	follow(followerId, followeeId) {
	  if (!this.following.has(followerId)) {
		this.following.set(followerId, new Set())
	  }
  
	  this.following.get(followerId).add(followeeId);
	}
  
	unfollow(followerId, followeeId) {
	  if (this.following.has(followerId)) {
		this.following.get(followerId).delete(followeeId);
	  }
	}
  }
  
  let twitter = new Twitter();
  twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
  console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
  twitter.follow(1, 2);    // User 1 follows user 2.
  twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
  console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
  twitter.unfollow(1, 2);  // User 1 unfollows user 2.
  console.log(twitter.getNewsFeed(1));  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
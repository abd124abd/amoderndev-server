const TopicsService = {
  getTopics(knex) {
    return knex
      .select('*')
      .from('topics')
  },
  insertPostTopic(knex, newPostTopic) {
    return knex
      .insert(newPostTopic)
      .into('post_topics')
      .returning('*')
      .then(([postTopic]) => postTopic)
  },
  deletePostTopic(knex, removePostTopic) {
    return knex
      .raw(
        `DELETE
        FROM post_topics
        WHERE post_id = ${removePostTopic.post_id}
        AND topic_id = ${removePostTopic.topic_id}`
      )
  }
}

module.exports = TopicsService;

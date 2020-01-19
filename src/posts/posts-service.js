const PostsService = {
  getAllPosts(knex) {
    return knex
      .raw(
        `SELECT p.id, p.date_created, u.username, p.title, p.content, p.comment_count, array_agg(t.title) AS topics
         FROM posts p
         LEFT JOIN users u on p.user_id = u.id
         LEFT JOIN post_topics pt on p.id = pt.post_id
         LEFT JOIN topics t on pt.topic_id = t.id
         GROUP BY p.id, u.username`
       )
  },
  insertPost(knex, post) {
    return knex
      .insert(post)
      .into('posts')
      .returning('*')
      .then(([post]) => post)
  },
  getPostById(knex, postId) {
    return knex
      .from('posts')
      .select('*')
      .where('id', postId)
      .first()
  },
  updatePostById(knex, post) {
    return knex
      .from('posts')
      .where({id: post.id})
      .update(post)
      .returning('*')
      .then(([post]) => post)
  },
  deletePostById(knex, postId) {
    return knex
      .raw(
        `DELETE
        FROM posts
        WHERE id = ${postId}`
      );
  }
}

module.exports = PostsService;

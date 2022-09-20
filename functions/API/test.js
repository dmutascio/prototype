const { db } = require('../util/admin');

exports.test = (request, response) => {
  db
  .collection('ideas')
  .orderBy('createdAt', 'desc')
  .get()
  .then((data) => {
    let ideas = [];
    data.forEach((doc) => {
      ideas.push({
                  ideaId: doc.id,
                  title: doc.data().title,
        body: doc.data().body,
        createdAt: doc.data().createdAt,
      });
    });
    return response.json(ideas);
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code});
  });
};

const getAllTasks = (req, res) => {
  res.send("send all tasks");
};

const getSingleTask = (req, res) => {
  res.json({id: req.params.id});
};

const createTask = (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};

1. In this lesson, you created a middleware function called asyncWrapper. Why?

   > Every controller needs to handle errors. At first, we used the _"try-catch"_ syntax and ended up duplicating code. Later, by introducing async middleware, we were able to refactor our code, handle errors in a centralized way, customize error responses, and create a more flexible error-handling system.

2. Suppose that you want to make sure that both a status code and an error message are sent back to the user when they request the URL for a task that does not exist. Assume that you’ve created a CustomAPIError class and an error handler that references that class. Complete the code:

<pre> <code> ```js 
const getTask = asyncWrapper(async (req, res, next) => {  
  const { id: taskID } = req.params;  
  const task = await Task.findOne({ _id: taskID });  
  if (!task) {  
    return next(createCustomError(`No task with id: ${taskId}`, 404))
  }  
  res.status(200).json({ task });  
});
``` </code> </pre>

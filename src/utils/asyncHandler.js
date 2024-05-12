// 1st approach
const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
};

export default asyncHandler;

// asyncHandler is a higher order function it take other function as a input.
// const asyncHandler = (fn) => {}
// const asyncHandler = (fn) => {() => {}}
// const asyncHandler = (fn) => () => {}

// 2nd approach
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(res, req, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

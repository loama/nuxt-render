export default defineEventHandler(async (event) => {
  // Get the request method
  const method = event.method;
  const config = useRuntimeConfig();

  switch (method) {
    case "GET":
      return {
        message: `Public API_BASE: ${config.public.API_BASE} API_SECRET: ${config.API_SECRET}`,
      };

    case "POST":
      // Get the request body
      const body = await readBody(event);
      return {
        message: "hello POST request received",
        data: body,
      };

    case "DELETE":
      return {
        message: "hello DELETE request received",
      };

    default:
      // Handle unsupported methods
      throw createError({
        statusCode: 405,
        statusMessage: "hello, method not allowed",
      });
  }
});

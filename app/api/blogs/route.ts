export const maxDuration = 9;
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {

  function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  await delay(60000);

  return new Response("It's been 60 seconds!", {
    status: 200,
  });
}
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&&APPID=${apiKey}`;

    const forecastRes = await fetch(forecastURL);
    const forecastData = await forecastRes.json();


    return NextResponse.json(forecastData);
  } catch (error) {
    console.log("Error in getting forecast data ");
    return new Response("Error in getting forecast data ", { status: 500 });
  }
}
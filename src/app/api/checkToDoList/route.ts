import { NextRequest, NextResponse } from 'next/server';

export function GET(req:NextRequest){
   const searchParams = req.nextUrl.searchParams
   const nameItem = searchParams.get("nameItem")
   const daysOfWeek = JSON.parse(searchParams.get("daysOfWeek")!)
   const DefinitelyDoable = searchParams.get("DefinitelyDoable")
   const Id = Math.random().toString(36).substring(2, 11);
   return NextResponse.json({
    nameItem,
    daysOfWeek,
    DefinitelyDoable,
    Id
  },{status:200});
}

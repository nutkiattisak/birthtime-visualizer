import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BirthTimeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [timeAlive, setTimeAlive] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (birthDate) {
        const birth = new Date(birthDate);
        const now = new Date();
        const diff = now - birth;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeAlive({ years, months, days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthDate]);

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">เวลาที่คุณอยู่บนโลก</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full"
          />
          <Button onClick={() => setBirthDate('')} className="w-full">รีเซ็ต</Button>
          {birthDate && (
            <div className="text-center space-y-2">
              <p>คุณมีชีวิตอยู่มาแล้ว:</p>
              <p>{timeAlive.years} ปี {timeAlive.months} เดือน {timeAlive.days} วัน</p>
              <p>{timeAlive.hours} ชั่วโมง {timeAlive.minutes} นาที {timeAlive.seconds} วินาที</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BirthTimeCalculator;
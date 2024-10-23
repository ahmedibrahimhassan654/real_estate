import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      {/* This forces RTL layout */}
      <h1 className="text-4xl font-bold">
        مرحبًا بكم في موقع العقارات الخاص بنا
      </h1>
      <p>هذا هو المحتوى الخاص بصفحة العقارات الخاصة بك.</p>
    </div>
  );
}

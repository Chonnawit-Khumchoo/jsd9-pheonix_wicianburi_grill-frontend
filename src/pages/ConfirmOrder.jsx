import React from "react";
import BasicButton from "../components/BasicButton";
import Typography from "@mui/material/Typography";


export default function ConfirmOrder() {
  return (
    <div className="min-h-screen p-4 bg-primary sm:p-8">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <h1 className="text-2xl font-bold">ตรวจสอบคำสั่งซื้อ</h1>

{/* input field  */}

          <div className="p-6 space-y-4 bg-white shadow rounded-2xl">
            <h2 className="text-lg font-semibold">
              โปรดกรอกรายละเอียดการจัดส่ง
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="email"
                autoComplete="email"
                placeholder="อีเมล์"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="tel"
                autoComplete="tel"
                placeholder="เบอร์โทรศัพท์"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                placeholder="ชื่อ"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                placeholder="นามสกุล"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="address"
                autoComplete="address-line1"
                placeholder="ที่อยู่"
                className="w-full col-span-1 px-4 py-2 border border-gray-300 rounded-lg sm:col-span-2"
              />
              <input
                type="text"
                name="subDistrict"
                autoComplete="address-line2"
                placeholder="ตำบล"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="district"
                autoComplete="address-level2"
                placeholder="อำเภอ"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="province"
                autoComplete="address-level1"
                placeholder="จังหวัด"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
              <input
                type="text"
                name="postalCode"
                autoComplete="postal-code"
                placeholder="รหัสไปรษณีย์"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              />
            </div>
          </div>

{/* Mui Button (need to be fix) !! */}
          <BasicButton text="ยืนยันคำสั่งซื้อ" />
        </div>

{/* Right Column for items summary and Subtotal */}

        <div className="p-6 space-y-4 bg-white shadow rounded-2xl">
          <h2 className="text-lg font-semibold">รายการสั่งซื้อ</h2>
          <table class="w-full border-collapse mt-4">
            <thead>
              <tr class="border-b">
                <th class="text-left text-xl font-semibold py-2">สินค้า</th>
                <th class="text-right text-xl font-semibold py-2">ราคา</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-[0.5px] border-gray-300">
                <td class="py-2">ข้าวเหนียวเขี้ยวงู เกรดเอ x 2 กก.</td>
                <td class="text-right py-2">฿ 120</td>
              </tr>

              <tr class="border-b-[0.5px] border-gray-300">
                <td class="py-2">ข้าวไรซ์เบอรี่ เกรดเอบวก x 2 กก.</td>
                <td class="text-right py-2">฿ 180</td>
              </tr>
            </tbody>
          </table>
          <div class="mt-4 text-right">
            <p class="text-lg font-semibold">
              ราคารวม :<span class=""> ฿300</span>
            </p>
            <p class="text-lg font-semibold">
              ค่าจัดส่ง :<span class=""> ฿35</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

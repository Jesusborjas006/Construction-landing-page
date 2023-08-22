import avatar1 from "../construction-images/avatar1.png";
import avatar2 from "../construction-images/avatar2.png";
import avatar3 from "../construction-images/avatar3.png";

const Engineers = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-8 sm:p-10 text-center mb-10">
      <h2 className="text-3xl mb-4 md:text-4xl font-semibold">
        Our Best Engineers
      </h2>
      <h4 className="text-sm text-gray-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt.
      </h4>
      <div className="flex justify-evenly flex-wrap gap-x-2 gap-y-10">
        <div className="shadow-lg w-[300px] p-6 rounded-md">
          <img className="mx-auto mb-4" src={avatar1} alt="avatar" />
          <h4 className="text-xl font-semibold">Chris Evans</h4>
          <p className="text-gray-700 text-xs mb-6">Michigan, TX</p>
          <p className="text-gray-700">123-456-7890</p>
          <p className="text-blue-500">chrisevans@mail.com</p>
        </div>
        <div className="shadow-lg w-[300px] p-6 rounded-md">
          <img className="mx-auto mb-4" src={avatar2} alt="avatar" />
          <h4 className="text-xl font-semibold">Alison Kiara</h4>
          <p className="text-gray-700 text-xs mb-6">Michigan, TX</p>
          <p className="text-gray-700">123-456-7890</p>
          <p className="text-blue-500">alisonkiara@mail.com</p>
        </div>
        <div className="shadow-lg w-[300px] p-6 rounded-md">
          <img className="mx-auto mb-4" src={avatar3} alt="avatar" />
          <h4 className="text-xl font-semibold">Adam Gates</h4>
          <p className="text-gray-700 text-xs mb-6">Michigan, TX</p>
          <p className="text-gray-700">123-456-7890</p>
          <p className="text-blue-500">adamgates@mail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Engineers;

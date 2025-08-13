export default function Footer() {
  return (
    <div className="bg-orange-500 flex justify-between items-center p-6 mt-5">
      <div>
        <h1 className="text-white">© 2025 Athul. All rights reserved.</h1>
      </div>
      <ul className="mr-30 text-2xl text-white font-bold ">
        <li className="inline mr-5 hover:text-black">
          <a href="https://github.com/athul457/athul457" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="inline hover:text-black duration-300 ease-in-out">
          <a href="https://www.linkedin.com/in/athul457/" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

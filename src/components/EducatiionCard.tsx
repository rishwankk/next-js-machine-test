import { IMAGE_3 } from '@/app/constants/imageLinks';
import Image from 'next/image';

const EducationHighlight = () => {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Lorem Ipsum</h1>
        <h3 className="text-2xl font-semibold mb-4">dolor sit consectetur</h3>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/676c/f1f6/20a34a9b8d994fadb9aa4893051a17e8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZuncfcZbkgOBSNn64-mZmfPQUZqVZuJZXsU5fRGN7VsrLosU2sIx0cLuI7bb1YbG~ZUbJTmSpwZBLbCvCeCJintEgKiN1GQuDNGXyT-CDphUQvxKiCxEOx0yl-QVifSypP85t8Z2FQPQHdlize2GDlYLAbCj0KYXeDb5MMU6msrDP1z-S4WiwhBvOOZgG3~pkzdDU9274vc5dDWJiVlfHW0ACD5DB64hdn8cjxt2qY7nMsESLALkje-XdWsui4ofUAqDYtj~2eeAAGT3bsid1nlQFCxPcWltGviHiC0N3nbqRQm6VvPN4ungfXq0L~QWgFZRCzzm-AP-AdThh48h3Q__"
            alt="Background Image"
            className="object-cover w-full h-full opacity-20"
          />
        </div>

        <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <h4 className="text-lg font-semibold mb-2">Lorem Ipsum?</h4>
          <div className="relative z-10 rounded-lg overflow-hidden mb-4">
            <img
              src={IMAGE_3}
              alt="Graduation Image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <h4 className="text-xl font-bold z-10 relative">Lorem Ipsum</h4>
          <p className="text-gray-600 z-10 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla.
          </p>
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button className="rounded-full bg-white p-2 shadow-md">
              <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.293 4.293a1 1 0 011.414 0L13 9.586l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 10 6.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHighlight;

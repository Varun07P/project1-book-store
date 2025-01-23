import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Signup Data:', data);  // This will print the form data to the console
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close modal button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name input */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email input */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password input */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* Signup button */}
              <div className="flex justify-around mt-6">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
              </div>

              {/* Login link */}
              <p className="mt-4">
                Already have an account?{' '}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={openModal} // Opens the modal when clicked
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        </div>

        {/* Login Modal */}
        {isModalOpen && (
          <dialog id="login-modal" open>
            <div className="modal-box">
              <Login />
              <div className="flex justify-end">
                <button
                  onClick={closeModal} // Close modal when clicked
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  ✕
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
}

export default Signup;

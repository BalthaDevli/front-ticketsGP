import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import { EmailOutlined, LockOutlined, CancelOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { mechanic, route, rancher, trucker } from '../../assets';

const Login = () => {
  const navigation = useNavigate();
  const { errorMessage } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    wrongCredentials: false,
  });

  useEffect(() => {
    if (!errorMessage.length) return;

    alert('Login incorrecto',);
  }, [errorMessage]);

  const handleChange = (name: string, value: string) => {
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  };

  // const forgotPassword = () => {
  //   navigation('/reset');
  // };

  const loginUser = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // if (!user.email) {
      //   setErrors({
      //     ...errors,
      //     email: true,
      //   });

      //   return;
      // }

      // if (!user.password) {
      //   setErrors({
      //     ...errors,
      //     password: true,
      //   });

      //   return;
      // }

      // setErrors({
      //   email: false,
      //   password: false,
      //   wrongCredentials: false,
      // });

      navigation('/boards');
    } catch (error: any) {
      console.error('El error', error.response.data.message);
      toast.error(`Error al iniciar sesión. ${error.response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className='flex min-h-screen justify-center items-center overflow-hidden'
      onSubmit={loginUser}
    >
      <video
        autoPlay
        loop
        muted
        className='hidden lg:flex lg:absolute inset-0 -z-20 object-cover w-full h-full'
      >
        <source src='https://penna-public.s3.amazonaws.com/luzneonmoveFinal.mp4' type='video/mp4' />
        Your browser does not support the video.
      </video>

      <div className='flex flex-col rounded-lg bg-black/30 overflow-hidden'>
        <div className='relative flex flex-row w-full h-32'>
          <img src={mechanic} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={route} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={rancher} alt='combustible' className='w-full h-full object-cover scale-110' />
          <img src={trucker} alt='combustible' className='w-full h-full object-cover scale-110' />

          <p className='absolute -bottom-2 w-full px-auto pb-3 bg-black/30 text-center text-3xl font-roboto-thin text-blue-400'>movemos <span className='text-[#92BB42]'>energía</span></p>
        </div>

        <div className='flex flex-col w-full z-10 bg-white/85 rounded-t-lg backdrop-blur-xl p-4'>
          <div className='flex flex-col pb-2 border-b'>
            <p className='text-center text-2xl text-black'>INGRESO</p>
            <p className='text-center text-lg text-black'>TICKETS SISTEMAS</p>
          </div>

          <div className='flex flex-col gap-6 py-10'>
            <div className='flex flex-row min-w-[300px] items-center py-1 rounded-md border border-gray bg-white shadow-lg'>
              <div className='p-4'>
                <EmailOutlined color='inherit' />
              </div>

              <div className='relative flex flex-col w-full px-4 border-l border-gray'>
                <label className='pt-1 text-xs'>Ingrese su email</label>
                <input
                  className='w-full z-20 pt-2 mb-1 text-black outline-none bg-transparent'
                  type='email'
                  name='email'
                  placeholder='ejemplo@gmail.com'
                  value={user.email}
                  onChange={e => handleChange('email', e.target.value)}
                // required
                />
                {user.email && (
                  <button
                    type='button'
                    className='absolute top-5 right-5 z-20'
                    onClick={() => setUser(prevUser => ({
                      ...prevUser,
                      email: '',
                    }))}
                  >
                    <CancelOutlined color='error' />
                  </button>
                )}
              </div>

              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className='flex flex-row min-w-[300px] items-center py-1 rounded-md border border-gray bg-white shadow-lg'>
              <div className='p-4'>
                <LockOutlined color='inherit' />
              </div>

              <div className='relative flex flex-col w-full px-4 border-l border-gray'>
                <label className='pt-1 text-xs'>Ingrese su contraseña</label>
                <input
                  className='w-full z-20 pt-2 mb-1 text-black outline-none'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='Contraseña'
                  value={user.password}
                  onChange={e => handleChange('password', e.target.value)}
                // required
                />
                <button
                  type='button'
                  className='absolute top-5 right-5 z-20'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Visibility color='action' />
                  ) : (
                    <VisibilityOff color='action' />
                  )}
                </button>
              </div>

            </div>
            {errors.password && <p>Complete la contraseña</p>}
            {errors.wrongCredentials && <p>Email o contraseña incorrectos.</p>}
          </div>

          <div className='flex flex-col gap-4'>
            <button
              type='submit'
              className={`py-3.5 rounded-lg bg-[#0E4841] hover:bg-[#0E4841]/95 transition-all focus:outline-none`}
            >
              <p className='pt-0.5 text-xl text-white font-semibold'>
                {isLoading ? (
                  <CircularProgress size={20} />
                ) : (
                  'Ingresar'
                )}
              </p>
            </button>

            {/* <button type='button' onClick={forgotPassword}>
              <p className='text-md text-[#0E4841] hover:underline'>Olvidé mi contraseña</p>
            </button> */}
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login;
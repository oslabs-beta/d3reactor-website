import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import useDarkMode from '../hooks/useDarkMode'

function classNames(...classes : any)  {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle() {
  const [colorTheme, setTheme] = useDarkMode();
  const[enabled,setEnabled] = useState<boolean>(false);

  const handleChange = (nextChecked: boolean) => {
    setEnabled(nextChecked);
  };

   useEffect(() => {
     setTheme(enabled ? 'dark' : 'light');
   }, [enabled, setTheme]);

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={classNames(
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span 
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}
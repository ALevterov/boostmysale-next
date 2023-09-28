export const handleClick = (e: any) => {
  let id: string = ''

  if (typeof e === 'string') 
    id = e
  else {
		e.preventDefault()
		id = e.target.dataset?.href
	}

  if (!id) 
    id = e.target.childNodes[0].dataset.href
  
  const el = document.querySelector('#'+id)
	const myWindow: any = window
	myWindow._stopStupidBrowsersBehavior = true;

	el!.scrollIntoView({
		behavior: 'smooth',
	})
	setTimeout(() => {
		myWindow._stopStupidBrowsersBehavior = false;
	}, 700)
}

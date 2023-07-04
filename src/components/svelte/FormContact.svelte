<script lang="ts">
  import Button from "./Button.svelte"
  import DynamicCard from "./DynamicCard.svelte"
  import Input from "./Input.svelte"
  import TextArea from "./TextArea.svelte"
  import { SEND_CONTACT_MESSAGE } from '../../services/SEND_CONTACT_MESSAGE'

  let isLoading = false
  function onSubmit (event: Event & {
			currentTarget: EventTarget & HTMLFormElement
		}) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form) {
      return
    }
    const data = Object.fromEntries(new FormData(form))
    if (!data?.subject) {
        return alert('Subject is required')
      }
      if (!data?.email) {
        return alert('Subject is required')
      }
      if (!data?.message) {
        return alert('Message is required')
      }
      isLoading = true
      SEND_CONTACT_MESSAGE(data).then(() => {
        form.reset()
        alert('Message sended successfully')
      }).catch((error: any) => {
        console.error(error)
        alert('Error to send message')
      })
      .finally(() => {
        isLoading = false
      })
  }

</script>

<form on:submit={onSubmit}>
  <DynamicCard variant='gradient' addClass='my-2 grid grid-cols-1 w-full grid grid-cols-1 max-w-2xl'>
    <Input labeltext='Your email:' props={{ placeholder: 'jhon_doe@email.com', type: 'email', required: true, name: 'email' }} />
    <Input labeltext='Subject:' props={{ placeholder: 'Full Stack Developer, Front End Developer', type: 'text', required: true, name: 'subject' }} />
    <TextArea props={{ name: 'message', placeholder: 'Hi, my name is Jhon Doe...', required: true }} />
    <Button props={{ type: 'submit', disabled: isLoading }}>{isLoading ? 'Sending...' : 'Send'}</Button>
  </DynamicCard>
 </form>
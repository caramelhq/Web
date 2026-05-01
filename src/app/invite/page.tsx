import { redirect } from 'next/navigation';
import { INVITE_URL } from '../../config';

export default function InvitePage() {
  redirect(INVITE_URL);
}

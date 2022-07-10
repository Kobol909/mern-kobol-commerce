import styled from 'styled-components';

import { Home } from '@styled-icons/material-outlined/Home';
import { ContactPage } from '@styled-icons/material-outlined/ContactPage';
import { Login } from '@styled-icons/material-outlined/Login';
import { Logout } from '@styled-icons/material-outlined/Logout';
import { Unsubscribe } from '@styled-icons/material-outlined/Unsubscribe';
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle';
import { AddressCard } from '@styled-icons/fa-regular/AddressCard';
import { FileDownload } from '@styled-icons/material-outlined/FileDownload';
import { History } from '@styled-icons/boxicons-regular/History';
import { Payments } from '@styled-icons/material-outlined/Payments';

const HomeIcon = styled(Home)`
  background-color: ${({ theme }) => theme.fill};
`;
const ContactIcon = styled(ContactPage)`
  background-color: ${({ theme }) => theme.fill};
`;
const LoginIcon = styled(Login)`
  background-color: ${({ theme }) => theme.fill};
`;
const LogoutIcon = styled(Logout)`
  background-color: ${({ theme }) => theme.fill};
`;
const UnsubscribeIcon = styled(Unsubscribe)`
  background-color: ${({ theme }) => theme.fill};
`;
const AccountIcon = styled(AccountCircle)`
  background-color: ${({ theme }) => theme.fill};
`;
const AddressIcon = styled(AddressCard)`
  background-color: ${({ theme }) => theme.fill};
`;
const DownloadIcon = styled(FileDownload)`
  background-color: ${({ theme }) => theme.fill};
`;
const HistoryIcon = styled(History)`
  background-color: ${({ theme }) => theme.fill};
`;
const PaymentsIcon = styled(Payments)`
  background-color: ${({ theme }) => theme.fill};
`;

export {
  HomeIcon,
  ContactIcon,
  LoginIcon,
  LogoutIcon,
  UnsubscribeIcon,
  AccountIcon,
  AddressIcon,
  DownloadIcon,
  HistoryIcon,
  PaymentsIcon
};

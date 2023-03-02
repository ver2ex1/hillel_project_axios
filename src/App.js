import { QueryClient, QueryClientProvider } from 'react-query';
import Tabs from 'components/Tabs';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs />
    </QueryClientProvider>
  );
}

export default App;

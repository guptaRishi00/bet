import { ArrowLeft, ArrowRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Wallet() {
  const transactions = [
    { date: 'Apr 26, 2025', type: 'Referral Reward', amount: 215, color: 'text-yellow-500' },
    { date: 'Apr 24, 2025', type: 'Bank Transfer', amount: 150, color: 'text-red-500' },
    { date: 'Apr 21, 2025', type: 'Referral Reward', amount: 25, color: 'text-yellow-500' },
    { date: 'Apr 18, 2025', type: 'Commission', amount: 215, color: 'text-yellow-500' },
    { date: 'Apr 15, 2025', type: 'Bank Transfer', amount: 150, color: 'text-red-500' },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#101212] to-[#3B3E40] text-white">
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6">
        <button className="flex bg-[#1C1D21] py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-28 w-full items-center justify-center sm:justify-start text-gray-300 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rotate-180" />
          <span className="font-bold text-sm sm:text-base">Profile {'>'} Wallet</span>
        </button>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Transaction History */}
          <Card className="bg-[#1C1D21] border-gray-700">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-6">Transaction History</h2>

              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-white text-sm">{transaction.date}</p>
                      <p className="text-gray-400 text-xs">{transaction.type}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className={`font-medium ${transaction.color}`}>
                        {transaction.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button className="bg-gradient-to-b from-[#61F308] to-[#15B54B] hover:opacity-90 text-white px-8 py-2 rounded-full">
                  Show all transaction
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Balance */}
          <div className="space-y-6">
            <Card className="bg-[#1C1D21] border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Wallet Balance</h2>

                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-green-400 text-3xl font-bold">325.50</span>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-b from-[#61F308] to-[#15B54B] hover:opacity-90 text-white py-3 rounded-2xl">
                    Earn Coins
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full bg-[#1C1D21] border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-3 rounded-2xl"
                  >
                    Withdraw
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Added Banks */}
            <Card className="bg-[#1C1D21] border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Added Banks</h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-8 bg-[#1C1D21] rounded-3xl border border-green-500">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-white mr-3" />
                      <span className="text-white">Visa ****4582</span>
                    </div>
                    <div className="bg-gradient-to-b from-[#61F308] to-[#15B54B] flex items-center  rounded-full p-[1px]">
                      <span className="bg-[#1F2E24] text-white px-3 py-1 rounded-full text-xs font-medium">
                        Default
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-8 bg-[#1C1D21] rounded-3xl border border-gray-600">
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-white mr-3" />
                      <span className="text-white">Mastercard ****4582</span>
                    </div>
                    <button className="text-green-500 text-sm hover:text-green-400">
                      Set default
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

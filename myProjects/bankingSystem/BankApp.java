package myProjects.bankingSystem;

import java.util.Scanner;

public class BankApp {
    public static void main(String[] args) {
        Bank bank = new Bank();
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("1. Create Account\n2. Deposit\n3. Withdraw\n4. Check Balance\n5. Exit");
            int choice = scanner.nextInt();
            
            switch (choice) {
                case 1:
                    BankAccount newAccount = bank.createAccount();
                    System.out.println("Account created. Your account number is: " + newAccount.getAccountNumber());
                    break;
                case 2:
                    System.out.println("Enter account number:");
                    int accNum = scanner.nextInt();
                    System.out.println("Enter amount to deposit:");
                    double depositAmount = scanner.nextDouble();
                    bank.depositToAccount(accNum, depositAmount);
                    break;
                case 3:
                    System.out.println("Enter account number:");
                    accNum = scanner.nextInt();
                    System.out.println("Enter amount to withdraw:");
                    double withdrawAmount = scanner.nextDouble();
                    bank.withdrawFromAccount(accNum, withdrawAmount);
                    break;
                case 4:
                    System.out.println("Enter account number:");
                    accNum = scanner.nextInt();
                    BankAccount account = bank.getAccountByNumber(accNum);
                    if (account != null) {
                        System.out.println("Balance: " + account.getBankBalance());
                    } else {
                        System.out.println("Account not found.");
                    }
                    break;
                case 5:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice.");
            }
        }
    }
}


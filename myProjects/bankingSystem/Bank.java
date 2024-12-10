package myProjects.bankingSystem;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

public class Bank {
	private Logger logger = Logger.getLogger(Bank.class.getName());
	

	private Map<Integer, BankAccount> accounts = new HashMap<>();

	public BankAccount createAccount() {
		BankAccount account = new BankAccount();
		accounts.put(account.getAccountNumber(), account);
		return account;
	}

	public void depositToAccount(int accountNumber, double amount) {
		Account account = getAccountByNumber(accountNumber);
		
		if(account != null) {
			account.deposit(amount);
			System.out.println(BankHelper.SUCCESSFUL_DEPOSIT);
			logger.info(BankHelper.SUCCESSFUL_DEPOSIT);
		} else {
			logger.log(logger.getLevel() , BankHelper.ACCOUNT_NOT_FOUND);
		}
	}

	public void withdrawFromAccount(int accountNumber, double amount) {
		Account account = getAccountByNumber(accountNumber);

		if(account != null) {
			account.withdraw(amount);
			System.out.println(BankHelper.WITHDRAW_SUCCESSFUL);
			logger.info(BankHelper.WITHDRAW_SUCCESSFUL);
		} else {
			System.out.println(BankHelper.WITHDRAW_FAILED);
		}
	}

	public BankAccount getAccountByNumber(int accountNumber) {
		return this.accounts.getOrDefault(accountNumber, null);
	}

	public Map<Integer, BankAccount> getAccounts() {
		return this.accounts;
	}
}

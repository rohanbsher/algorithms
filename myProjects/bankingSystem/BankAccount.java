package myProjects.bankingSystem;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class BankAccount implements Account {

	private final int accountNumber;
	private BigDecimal bankBalance;
	private static int accountCounter = 1000;

	public BankAccount() {
		this.accountNumber = accountCounter++;
		this.bankBalance = BigDecimal.ZERO;
	}

	@Override
	public void deposit(BigDecimal amount) {
		if (amount.compareTo(BigDecimal.ZERO) > 0) {
			this.bankBalance = this.bankBalance.add(amount);
		} else {
			throw new IllegalArgumentException("Cannot deposit negative amount.");
		}
	}

	@Override
	public void withdraw(BigDecimal amount) {
		if (amount.compareTo(BigDecimal.ZERO) <= 0) {
			throw new IllegalArgumentException("Cannot withdraw negative or zero amount.");
		}
		if (amount.compareTo(bankBalance) > 0) {
			throw new InsufficientFundsException("Insufficient funds. Cannot withdraw!");
		}
		this.bankBalance = this.bankBalance.subtract(amount);
	}

	public int getAccountNumber() {
		return this.accountNumber;
	}

	public BigDecimal getBankBalance() {
		return this.bankBalance;
	}

}

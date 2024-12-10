package myProjects.bankingSystem;

public class BankHelper {
	
	private static final String SUCCESSFUL_DEPOSIT = "Deposited successfully";
	private static final String ACCOUNT_NOT_FOUND = "Account not found";
	private static final String WITHDRAW_SUCCESSFUL = "Withdraw successful";
	private static final String WITHDRAW_FAILED = "Withdraw failed";

	// Add getter methods for the constants
	public static String getSuccessfulDeposit() {
		return SUCCESSFUL_DEPOSIT;
	}

	public static String getAccountNotFound() {
		return ACCOUNT_NOT_FOUND;
	}

	public static String getWithdrawSuccessful() {
		return WITHDRAW_SUCCESSFUL;
	}

	public static String getWithdrawFailed() {
		return WITHDRAW_FAILED;
	}

}
